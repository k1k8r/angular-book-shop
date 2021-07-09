import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  camelCase,
  cloneDeep,
  mapKeys,
  isArray,
  mapValues,
  isPlainObject,
  map as lodashMap
} from 'lodash';

function keysToCamelCase(object: any): any {
  let camelCaseObject = cloneDeep(object);

  if (isArray(camelCaseObject)) {
    return lodashMap(camelCaseObject, keysToCamelCase);
  } else {
    camelCaseObject = mapKeys(camelCaseObject, (value, key) => {
      return camelCase(key);
    });

    return mapValues(camelCaseObject, (value) => {
      if (isPlainObject(value)) {
        return keysToCamelCase(value);
      } else if (isArray(value)) {
        return lodashMap(value, keysToCamelCase);
      } else {
        return value;
      }
    });
  }
}


@Injectable()
export class ConvertInterceptor implements HttpInterceptor {

  constructor() {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
    ): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event.type === HttpEventType.Response) {
            return event.clone({ body: keysToCamelCase(event.body) });
          }

          return event;
        }),
      );
  }

}
