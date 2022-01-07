import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule,Routes } from '@angular/router';

import { WidgetAdsComponent } from './widget-ads/widget-ads.component';
import { WidgetBannerComponent } from './widget-banner/widget-banner.component';
import { WidgetSocialComponent } from './widget-social/widget-social.component';
import { WidgetMenuTopComponent } from './widget-menu-top/widget-menu-top.component';
import { WidgetMenuMainComponent } from './widget-menu-main/widget-menu-main.component';
import { ElmHeaderComponent } from './elm-header/elm-header.component';
import { WidgetPlaylistComponent } from './widget-playlist/widget-playlist.component';
import { WidgetFeaturedVideosComponent } from './widget-featured-videos/widget-featured-videos.component';
import { WidgetPopularVideosComponent } from './widget-popular-videos/widget-popular-videos.component';
import { WidgetContactComponent } from './widget-contact/widget-contact.component';
import { WidgetFacebookComponent } from './widget-facebook/widget-facebook.component';
import { WidgetMenuBottomComponent } from './widget-menu-bottom/widget-menu-bottom.component';
import { WidgetCopyrightComponent } from './widget-copyright/widget-copyright.component';
import { ElmFooterComponent } from './elm-footer/elm-footer.component';
import { ElmFooterTopComponent } from './elm-footer-top/elm-footer-top.component';
import { ElmFooterBottomComponent } from './elm-footer-bottom/elm-footer-bottom.component';
import { ElmPlaylistComponent } from './elm-playlist/elm-playlist.component';
import { ElmVideoComponent } from './elm-video/elm-video.component';
import { ElmPanelTitleComponent } from './elm-panel-title/elm-panel-title.component';
import { ElmYoutubeIframeComponent } from './elm-youtube-iframe/elm-youtube-iframe.component';

import { SafePipe } from './../shared/pipes/safe.pipe';

@NgModule({
  declarations: [
    WidgetAdsComponent,
    WidgetBannerComponent,
    WidgetSocialComponent,
    WidgetMenuTopComponent,
    WidgetMenuMainComponent,
    WidgetPlaylistComponent,
    WidgetFeaturedVideosComponent,
    WidgetPopularVideosComponent,
    WidgetContactComponent,
    WidgetFacebookComponent,
    WidgetMenuBottomComponent,
    WidgetCopyrightComponent,

    ElmHeaderComponent,
    ElmFooterComponent,
    ElmFooterTopComponent,
    ElmFooterBottomComponent,
    ElmPlaylistComponent,
    ElmVideoComponent,
    ElmPanelTitleComponent,
    ElmYoutubeIframeComponent,

    SafePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    WidgetAdsComponent,
    WidgetBannerComponent,
    WidgetSocialComponent,
    WidgetMenuTopComponent,
    WidgetMenuMainComponent,
    WidgetPlaylistComponent,
    WidgetFeaturedVideosComponent,
    WidgetPopularVideosComponent,
    WidgetContactComponent,
    WidgetFacebookComponent,
    WidgetMenuBottomComponent,
    WidgetCopyrightComponent,

    ElmHeaderComponent,
    ElmFooterComponent,
    ElmFooterTopComponent,
    ElmFooterBottomComponent,
    ElmPlaylistComponent,
    ElmVideoComponent,
    ElmPanelTitleComponent,
    ElmYoutubeIframeComponent,

    SafePipe
  ]
})
export class ElementsModule { }
