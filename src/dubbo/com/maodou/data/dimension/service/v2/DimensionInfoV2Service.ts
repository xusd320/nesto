import {DimensionConditionDTO} from './../../dto/DimensionConditionDTO';
import {argumentMap, JavaInteger, JavaString, JavaList} from 'interpret-util';
import {TDubboCallResult, Dubbo} from 'dubbo2.js';

export interface IDimensionInfoV2Service {
  agg(
    Integer0: JavaInteger,
    String1: JavaString,
    List2: JavaList,
  ): TDubboCallResult<{[name: string]: Object}>;
  count(Integer0: JavaInteger, String1: JavaString): TDubboCallResult<number>;
  commonQuery(
    Integer0: JavaInteger,
    List1: JavaList,
    List2: JavaList,
    String3: JavaString,
    Integer4: JavaInteger,
    Integer5: JavaInteger,
  ): TDubboCallResult<Array<string>>;
  distinct(
    Integer0: JavaInteger,
    String1: JavaString,
    List2: JavaList,
    String3: JavaString,
    Integer4: JavaInteger,
    Integer5: JavaInteger,
  ): TDubboCallResult<Array<{[name: string]: Object}>>;
  agg(
    Integer0: JavaInteger,
    List1: JavaList,
    List2: JavaList,
  ): TDubboCallResult<{[name: string]: Object}>;
  countDistinct(
    Integer0: JavaInteger,
    String1: JavaString,
    List2: JavaList,
  ): TDubboCallResult<number>;
  count(Integer0: JavaInteger, List1: JavaList): TDubboCallResult<number>;
  aggGroupBy(
    Integer0: JavaInteger,
    List1: JavaList,
    List2: JavaList,
    List3: JavaList,
    String4: JavaString,
    Integer5: JavaInteger,
    Integer6: JavaInteger,
  ): TDubboCallResult<Array<{[name: string]: Object}>>;
  commonQuery(
    Integer0: JavaInteger,
    String1: JavaString,
    List2: JavaList,
    String3: JavaString,
    Integer4: JavaInteger,
    Integer5: JavaInteger,
  ): TDubboCallResult<Array<string>>;
  distinct(
    Integer0: JavaInteger,
    List1: JavaList,
    List2: JavaList,
    String3: JavaString,
    Integer4: JavaInteger,
    Integer5: JavaInteger,
  ): TDubboCallResult<Array<{[name: string]: Object}>>;
  countAggGroupBy(
    Integer0: JavaInteger,
    List1: JavaList,
    List2: JavaList,
  ): TDubboCallResult<number>;
  countAggGroupBy(
    Integer0: JavaInteger,
    String1: JavaString,
    List2: JavaList,
  ): TDubboCallResult<number>;
  aggGroupBy(
    Integer0: JavaInteger,
    String1: JavaString,
    List2: JavaList,
    List3: JavaList,
    String4: JavaString,
    Integer5: JavaInteger,
    Integer6: JavaInteger,
  ): TDubboCallResult<Array<{[name: string]: Object}>>;
  countDistinct(
    Integer0: JavaInteger,
    List1: JavaList,
    List2: JavaList,
  ): TDubboCallResult<number>;
}

export const DimensionInfoV2ServiceWrapper = {
  agg: argumentMap,
  count: argumentMap,
  commonQuery: argumentMap,
  distinct: argumentMap,
  countDistinct: argumentMap,
  aggGroupBy: argumentMap,
  countAggGroupBy: argumentMap,
};

export function DimensionInfoV2Service(dubbo: Dubbo): IDimensionInfoV2Service {
  return dubbo.proxyService<IDimensionInfoV2Service>({
    dubboInterface:
      'com.maodou.data.dimension.service.v2.DimensionInfoV2Service',
    methods: DimensionInfoV2ServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
