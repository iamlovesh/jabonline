import { NgModule } from '@angular/core';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { RmNumberPipe } from './pipe/rm-number.pipe';
import { ReplacePathPipe } from './pipe/replace-path.pipe';
import { StripTagPipe } from './pipe/strip-tag.pipe';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CommonRemovePipe } from './pipe/common-remove.pipe';
import { SplitWordPipe } from './pipe/split-word.pipe';
import { ReplaceUrlPipe } from './pipe/replace-url.pipe';
import { HtmlEntityDecodePipe } from './pipe/html-entity-decode.pipe';
import { ExplodeYearPipe } from './pipe/explode-year.pipe';
import { ContentLength } from './pipe/contentLength.pipe';

@NgModule({
    imports: [
        // dep modules
        
    ],
    declarations: [
        HtmlEntityDecodePipe,
        ExplodeYearPipe,
        ContentLength,
        RightMenuComponent,
        ReplacePipe,
        RmNumberPipe,
        ReplacePathPipe,
        StripTagPipe,
        SafeHtmlPipe,
        CommonRemovePipe,
        SplitWordPipe,
        ReplaceUrlPipe
    ],
    exports: [
        HtmlEntityDecodePipe,
        ExplodeYearPipe,
        RightMenuComponent,
        ReplacePipe,
        RmNumberPipe,
        ReplacePathPipe,
        StripTagPipe,
        SafeHtmlPipe,
        CommonRemovePipe,
        SplitWordPipe,
        ReplaceUrlPipe,
        LazyLoadImageModule,
        ContentLength,

    ]
})
export class ExportPipeModule { }
