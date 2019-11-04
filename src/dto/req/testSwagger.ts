import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CatReq {
  @ApiModelProperty({
    required: true,
  })
  @IsString()
  readonly name: string;

  @ApiModelProperty({
    required: true,
  })
  @IsInt({
    message: 'age必须为数字',
  })
  readonly age: number;

  @ApiModelProperty({
    required: false,
    type: String,
  })
  @IsString()
  readonly breed: string;
}
