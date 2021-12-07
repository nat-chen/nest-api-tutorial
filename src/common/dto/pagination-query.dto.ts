import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  limit: number;

  @Type(() => Number) // 不可省略，否则接口报错误信息 offset must be a positive number
  @IsOptional()
  @IsPositive()
  offset: number;
}
