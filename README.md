# Honkai VNs

Continuation of Chinese-to-English translation work of Honkai Impact VNs, from https://github.com/zklm/honkai-vns, in the form of edits to .xml files that can be loaded via zklm's scripts into the VN viewer.

I am currently only working on the Anti-Entropy VN. However, the standalone VN viewers made by zklm are available below:

- Anti-Entropy: https://zklm.github.io/honkai-vn-antientropy/ (Standalone)
  - Chapters 1 to 12: done by listless-restless
  - Chapters 13 to 26: partially done by Aiatar and zklm
- Durandal: https://zklm.github.io/honkai-vn-durandal/ (Standalone)
  - Chapters 1 to 20: done by Aiatar and zklm
  - Chapters 21 to 31: untranslated
- Seven Swords: https://zklm.github.io/honkai-vn-sevenswords/ (Standalone - note: does not currently have UI settings that allow toggling between translations)
  - Untranslated

For now I have created a separate fork, but will initiate pull requests once I have received confirmation from zklm that his project is still active. Otherwise, everything will remain in this fork, and I will continue to merge edits from the `test`("active") branch with my own `master` ("final") branch.

I will upload what I have previously translated into each of the chapters of the Anti-Entropy VN (up to Chapter 12). If time and energy permits, and if there is public interest, I may also contribute to the remaining chapters and VNs, adding to the work already done by Aiatar and [Arylin-Renata](https://github.com/Ayrlin-Renata/honkai-vns) with zklm.

Please note that while I am of Asian background, I am not a native Mandarin speaker, nor am I 100% fluent in Chinese. All translation from my end was done with a healthy dose of Google Translate, mdbg.net, and what I could remember from Chinese School and TVB dramas. If there are any corrections/suggestions, please create an issue and I'll get to it when I can. Do note that you are also free to generate your own fork and create your own edits, provided full credit is given to all translators.

## How to use

To use my translation: 

1. Go to https://zklm.github.io/honkai-vn-antientropy/ 
2. Top right gear icon 
3. Change Custom EN XML Source to https://raw.githubusercontent.com/listless-restless/honkai-vns/test/antientropy/en/xml/ for the active development ("test") branch
4. Refresh

## Known issues

- **Multi-line scrolling not available:** Multi-line scrolling in the dialog boxes is not working in the standalone VN viewers (e.g. https://zklm.github.io/honkai-vn-antientropy/) as it does in Mihoyo's original viewer (https://event.bh3.com/avgAntiEntropy/indexAntiEntropy.php). This is the case for both Chinese and translated text. I do not have experience in Javascript, nor do I have access to the code that allows loading of Mihoyo and custom resources into a standalone viewer. So I cannot remedy this.

  - **Temporary solution:** For now, people who want to read all the text should go to the "Log", or at least set font size in the settings to the smallest possible value.

