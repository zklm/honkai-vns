const fs = require('fs')

let args = process.argv.slice(2)

function getArg(name) {
    let idx = args.indexOf(name)
    if (idx !== -1 && args.length >= idx + 2) {
        return args[idx + 1]
    }
}

function usage() {
    console.log(`Usage: node pastebin-to-xml [translations_path] [xml_path]
Options: 
    -o [save_path] (Output file to save converted XML to)
    --strip-names (Not recommended since it can strip translation text itself at times, name stripping should be done with search+replace beforehand)
    --els [elements] (Custom XML element list to translate, e.g. --els 'speak,text,p class=\\\"article-text\\\"')
Example:
    node pastebin-to-xml temp ../durandal/en/xml/ch1.xml -o ../durandal/en/xml/ch1.xml`)
}

if (args.length < 2) {
    usage()
    return
}

if (!fs.existsSync(args[0])) {
    console.error("Couldn't access translation file")
    return
}

if (!fs.existsSync(args[1])) {
    console.error("Couldn't access xml file")
    return
}

// This isn't a good idea since it determines names by first index of ": " which can be present in the translation itself.
// It's more safe to not use --strip-names and instead copy the pastebin TL to a temp file and do a rgx search for "^([^:])*: ",
// and then only replace with "" after reviewing it.
let stripNames = args.includes('--strip-names')

let tls = fs.readFileSync(args[0]).toString().split('\n')
    .map(line => line.trim())
    .filter(line => !!line && !line.startsWith('http') && !line.startsWith('CHAPTER '));

if (stripNames) {
    tls = tls.map(line => {
        let colonIdx = line.indexOf(': ')
        if (colonIdx !== -1 && colonIdx < 30) {
            return line.substr(colonIdx + 2)
        }
        return line
    })
}

// This also isn't great. Not all <p class="article-text"> are translated in pastebins (e.g. notes).
// For now, when p els are included, the xml file should be checked and if there's notes in there, the offset can
// be fixed by inserting the original line or "_" (no quotes) at the appropriate index in the translation file.
let tlEls = getArg('--els') || `speak,text,p class="article-text"`
let elString = tlEls.split(",").map(el => el.trim()).join("|")

const rx = new RegExp(`<(${elString})[^>]*>([^<]+)</[^>]+>$`, 'gm')

let tlIndex = 0
let formatted = fs.readFileSync(args[1]).toString().replace(rx, function(match, el, text) {
    if (tlIndex + 1 > tls.length || tls[tlIndex++] === '_') return match
    return match.replace(text, tls[tlIndex - 1])
})

let outFile = getArg('-o')
if (outFile) {
    fs.writeFileSync(outFile, formatted)
} else {
    console.log(formatted)
}
