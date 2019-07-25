import { OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

export class Unsubscriber implements OnDestroy {
  protected subscribeControler$$: Subject<boolean> = new Subject();

  public ngOnDestroy() {
    this.subscribeControler$$.next(true);
    this.subscribeControler$$.complete();
  }
}
