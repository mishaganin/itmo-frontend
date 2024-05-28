import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { XMLBuilder } from 'fast-xml-parser';

@Injectable()
export class XmlInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    const acceptValue = request.headers['accept'];
    if (!acceptValue || !acceptValue.includes('application/xml')) {
      return next.handle();
    }

    return next.handle().pipe(
      map((data) => {
        response.header('Content-Type', 'application/xml');
        const builder = new XMLBuilder();
        return builder.build({ data });
      }),
    );
  }
}
