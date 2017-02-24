const fs = require('fs');
import path = require('path');
import { browser } from 'protractor';

const JS_BIND_INPUT = (target: HTMLElement) => {
  let input: HTMLInputElement = document.createElement('input');

  input.type = 'file';
  input.style.display = 'none';

  input.addEventListener('change', () => {
    target.scrollIntoView(true);

    const rect: any = target.getBoundingClientRect();
    const x: number = rect.left + (rect.width >> 1);
    const y: number = rect.top + (rect.height >> 1);
    const data: {files: any} = {files: input.files};

    ['dragenter', 'dragover', 'drop'].forEach((name: string) => {
      const event: MouseEvent = document.createEvent('MouseEvent');
      event.initMouseEvent(name, !0, !0, window, 0, 0, 0, x, y, !1, !1, !1, !1, 0, null);
      (event as any).dataTransfer = data;
      target.dispatchEvent(event);
    });

    document.body.removeChild(input);
  }, false);

  document.body.appendChild(input);

  return input;
};

module.exports = (dropArea: any, filePath: string) => {
  filePath = path.resolve(filePath);
  fs.accessSync(filePath, fs.F_OK);

  return dropArea
    .getWebElement()
    .then((element: any) => {
      browser
        .executeScript(JS_BIND_INPUT, element)
        .then((input: any) => {
          input.sendKeys(filePath);
        });
    });
};
