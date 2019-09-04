import {RequestModel} from './../RequestModel';
import java from 'js-to-java';

export interface IDimensionConditionDTO {
  model?: RequestModel;
}

export class DimensionConditionDTO {
  constructor(params: IDimensionConditionDTO) {
    this.model = params.model;
  }

  model?: RequestModel;

  __fields2java() {
    return {
      $class: 'com.maodou.data.dimension.dto.DimensionConditionDTO',
      $: {model: this.model ? this.model.__fields2java() : null},
    };
  }
}

//generate by interpret-cli dubbo2.js
