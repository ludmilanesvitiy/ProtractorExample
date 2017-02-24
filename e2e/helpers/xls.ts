'use strict';

const xlsJs = require('xlsjs');

export class XLS {
  public static getDataFromXLS(cellId: string): string {
    const fileNamePath: string = 'e2e/data/example.xls';
    const workbook: any = xlsJs.readFile(fileNamePath);
    const sheetNumberlist: any = workbook.SheetNames;

    return workbook.Sheets[sheetNumberlist['1']][cellId].v;
  };
}












