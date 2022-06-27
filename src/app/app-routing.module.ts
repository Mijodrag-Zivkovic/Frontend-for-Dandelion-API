import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConfigurationComponent} from "./components/configuration/configuration.component";
import {EntityExtractionComponent} from "./components/entity-extraction/entity-extraction.component";
import {TokenGuard} from "./token.guard";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";
import {LanguageDetectionComponent} from "./components/language-detection/language-detection.component";
import {SentimentAnalysisComponent} from "./components/sentiment-analysis/sentiment-analysis.component";
import {HistoryComponent} from "./components/history/history.component";

const routes: Routes = [
  {
    path: "configuration",
    component: ConfigurationComponent,

  },
  {
    path: "entityExtraction",
    component: EntityExtractionComponent,
    canActivate: [TokenGuard]
  },
  {
    path: "textSimilarity",
    component: TextSimilarityComponent,
    canActivate: [TokenGuard]
  },
  {
    path: "languageDetection",
    component: LanguageDetectionComponent,
    canActivate: [TokenGuard]
  },
  {
    path: "sentimentAnalysis",
    component: SentimentAnalysisComponent,
    canActivate: [TokenGuard]
  },
  {
    path: "history",
    component: HistoryComponent,
    canActivate: [TokenGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
