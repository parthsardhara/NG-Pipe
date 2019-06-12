import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './Pipe/exponential-strength.pipe';
import { SquarePipe } from './Pipe/square.pipe';
import { RoundPipe } from './Pipe/round.pipe';
import { SqrtPipe } from './Pipe/sqrt.pipe';
import { CeilPipe } from './Pipe/ceil.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    SquarePipe,
    RoundPipe,
    SqrtPipe,
    CeilPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
