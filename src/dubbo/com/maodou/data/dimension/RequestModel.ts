import java from 'js-to-java';

export interface IRequestModel {
  queryContent?: string;
  columnName?: string;
  queryType?: number;
}

export class RequestModel {
  constructor(params: IRequestModel) {
    this.queryContent = params.queryContent;
    this.columnName = params.columnName;
    this.queryType = params.queryType;
  }

  queryContent?: string;
  columnName?: string;
  queryType?: number;

  __fields2java() {
    return {
      $class: 'com.maodou.data.dimension.RequestModel',
      $: {
        queryContent: java.String(this.queryContent),
        columnName: java.String(this.columnName),
        queryType: java.Integer(this.queryType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
