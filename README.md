# Honkai VNs

Continuation of work from https://github.com/zklm/honkai-vns, in the form of edits to .xml files that can be loaded via zklm's scripts into the VN viewer.

For now I have created a separate fork, but will initiate pull requests once I have received confirmation from zklm that his project is still active. Otherwise, everything will remain in this fork, and I will continue to merge edits from the `test`("active") branch with my own `master` ("final") branch.

I will upload what I have previously translated into each of the chapters of the Anti-Entropy VN (up to Chapter 12). If time and energy permits, and if there is public interest, I may also contribute to the remaining chapters and VNs, adding to the work already done by Aiatar and [Arylin-Renata](https://github.com/Ayrlin-Renata/honkai-vns) with zklm.

Please note that while I am of Asian background, I am not a native Mandarin speaker, nor am I 100% fluent in Chinese. All translation from my end was done with a healthy dose of Google Translate, mdbg.net, and what I could remember from Chinese School and TVB dramas. If there are any corrections/suggestions, please create an issue and I'll get to it when I can. Do note that you are also free to generate your own fork and create your own edits.

## How to use

To use my translation: Go to https://zklm.github.io/honkai-vn-antientropy/ -> top right gear icon -> change Custom EN XML Source to https://raw.githubusercontent.com/listless-restless/honkai-vns/test/antientropy/en/xml/ for the active development ("test") branch.

## Known issues

- **Multi-line scrolling not available:** Multi-line scrolling in the dialog boxes is not working in the standalone VN viewers (e.g. https://zklm.github.io/honkai-vn-antientropy/) as it does in Mihoyo's original viewer (https://event.bh3.com/avgAntiEntropy/indexAntiEntropy.php). This is the case for both Chinese and translated text. I do not have experience in Javascript, nor do I have access to the code that allows loading of Mihoyo and custom resources into a standalone viewer. So I cannot remedy this.

  - **Temporary solution:** For now, people who want to read all the text should go to the "Log".




# Original readme from zklm's github
Structured translations of HI3 VNs so that they can be loaded in to VN via userscripts, extensions, standalone versions, etc.

* Anti-Entropy: https://zklm.github.io/honkai-vn-antientropy/ (Standalone)
* Durandal: https://zklm.github.io/honkai-vn-durandal/ (Standalone)

## Translators
The goal is to give contributor permissions of this repo to any active competent translator. Userscripts and so on would all then query from here to load translations. Full credit given of course. If anyone's keen, I guess just submit an issue, lemme know if you wanna discuss through email/whatever.

Translating is fairly straightforward, in each VN directory there's a CN xml and EN xml directory, it just involves updating the files in EN xml directory. EN xml files will have CN text by default until they're translated to make it easier.

For corrections and minor translations, feel free to submit an issue or PR.

## Consistency
Translations acquired from other sources are only modified to fix typos and to use official EN names over literal translations. 

Examples of official EN name changes:
* Destiny/Fate -> Schicksal
* Jormungand -> World Serpent
* Atagina -> Ataegina

For transparency, modified translations will have a comment alongside them containing the original line.

## Current Progress
* Anti-Entropy: CH1-12 untranslated, CH13-26 mostly done (Aiatar)
* Durandal: CH1-20 done (Aiatar), C21-31 untranslated
* Seven Swords: 0
