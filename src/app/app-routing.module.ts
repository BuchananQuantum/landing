import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCoverLoginComponent } from './auth/auth-cover-login/auth-cover-login.component';
import { AuthCoverRePasswordComponent } from './auth/auth-cover-re-password/auth-cover-re-password.component';
import { AuthCoverSignupComponent } from './auth/auth-cover-signup/auth-cover-signup.component';
import { AuthLoginThreeComponent } from './auth/auth-login-three/auth-login-three.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthRePasswordThreeComponent } from './auth/auth-re-password-three/auth-re-password-three.component';
import { AuthRePasswordComponent } from './auth/auth-re-password/auth-re-password.component';
import { AuthSignupThreeComponent } from './auth/auth-signup-three/auth-signup-three.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';
import { AccountMembersComponent } from './core/components/account-members/account-members.component';
import { AccountMessagesComponent } from './core/components/account-messages/account-messages.component';
import { AccountPaymentsComponent } from './core/components/account-payments/account-payments.component';
import { AccountProfileComponent } from './core/components/account-profile/account-profile.component';
import { AccountSettingComponent } from './core/components/account-setting/account-setting.component';
import { AccountWorksComponent } from './core/components/account-works/account-works.component';
import { ChangelogComponent } from './core/components/changelog/changelog.component';
import { ForumsCommentsComponent } from './core/components/forums-comments/forums-comments.component';
import { ForumsTopicComponent } from './core/components/forums-topic/forums-topic.component';
import { ForumsComponent } from './core/components/forums/forums.component';
import { ConnectionDeliveryComponent } from './core/components/connection-delivery/connection-delivery.component';
import { IndexRealEstateComponent } from './core/components/index-real-estate/index-real-estate.component';
import { MembershipBenefitsComponent } from './core/components/membership-benefits/membership-benefits.component';
import { IndexInsuranceComponent } from './core/components/index-insurance/index-insurance.component';
import { IndexJobComponent } from './core/components/index-job/index-job.component';
import { IndexOnepageComponent } from './core/components/index-onepage/index-onepage.component';
import { IndexPaymentsComponent } from './core/components/index-payments/index-payments.component';
import { IndexStudioComponent } from './core/components/index-studio/index-studio.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { PageAboutusComponent } from './core/components/page-aboutus/page-aboutus.component';
import { PageBlogDetailTwoComponent } from './core/components/page-blog-detail-two/page-blog-detail-two.component';
import { PageBlogDetailComponent } from './core/components/page-blog-detail/page-blog-detail.component';
import { PageBlogGridComponent } from './core/components/page-blog-grid/page-blog-grid.component';
import { PageBlogListSidebarComponent } from './core/components/page-blog-list-sidebar/page-blog-list-sidebar.component';
import { PageBlogListComponent } from './core/components/page-blog-list/page-blog-list.component';
import { PageBlogSidebarComponent } from './core/components/page-blog-sidebar/page-blog-sidebar.component';
import { PageComingsoonComponent } from './core/components/page-comingsoon/page-comingsoon.component';
import { PageContactDetailComponent } from './core/components/page-contact-detail/page-contact-detail.component';
import { PageContactTwoComponent } from './core/components/page-contact-two/page-contact-two.component';
import { PageErrorComponent } from './core/components/page-error/page-error.component';
import { PageThankyouComponent } from './core/components/page-thankyou/page-thankyou.component';
import { PageHistoryComponent } from './core/components/page-history/page-history.component';
import { PageInvoiceComponent } from './core/components/page-invoice/page-invoice.component';
import { PageJobApplyComponent } from './core/components/page-job-apply/page-job-apply.component';
import { PageJobCandidateComponent } from './core/components/page-job-candidate/page-job-candidate.component';
import { PageJobCompanyComponent } from './core/components/page-job-company/page-job-company.component';
import { PageJobDetailComponent } from './core/components/page-job-detail/page-job-detail.component';
import { PageJobsSidebarComponent } from './core/components/page-jobs-sidebar/page-jobs-sidebar.component';
import { PageJobsComponent } from './core/components/page-jobs/page-jobs.component';
import { PageJobCompanyListComponent } from './core/components/page-job-company-list/page-job-company-list.component';
import { PageJobCandidateListComponent } from './core/components/page-job-candidate-list/page-job-candidate-list.component';
import { PageMaintenanceComponent } from './core/components/page-maintenance/page-maintenance.component';
import { PagePricingComponent } from './core/components/page-pricing/page-pricing.component';
import { PagePrivacyComponent } from './core/components/page-privacy/page-privacy.component';
import { PageServicesComponent } from './core/components/page-services/page-services.component';
import { PageTeamComponent } from './core/components/page-team/page-team.component';
import { PageTermsComponent } from './core/components/page-terms/page-terms.component';


import { EmailAlertComponent } from './email/email-alert/email-alert.component';
import { EmailConfirmationComponent } from './email/email-confirmation/email-confirmation.component';
import { EmailInvoiceComponent } from './email/email-invoice/email-invoice.component';
import { EmailPasswordResetComponent } from './email/email-password-reset/email-password-reset.component';
import { SwitcherComponent } from './shared/switcher/switcher.component';

import { combineLatest } from 'rxjs/internal/operators';
import { UberBootyMessengerComponent } from './core/components/uberbooty-messenger/uberbooty-messenger.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: '', component: UberBootyMessengerComponent },
      { path: 'account-messages', component: AccountMessagesComponent },
      { path: 'account-members', component: AccountMembersComponent },
      { path: 'account-payments', component: AccountPaymentsComponent },
      { path: 'account-profile', component: AccountProfileComponent },
      { path: 'account-setting', component: AccountSettingComponent },
      { path: 'account-works', component: AccountWorksComponent },
      { path: 'changelog', component: ChangelogComponent },
      { path: 'forums', component: ForumsComponent },
      { path: 'forums-comments', component: ForumsCommentsComponent },
      { path: 'forums-topic', component: ForumsTopicComponent },
      { path: 'connection-delivery', component: ConnectionDeliveryComponent },
      { path: 'index-real-estate', component: IndexRealEstateComponent },
      { path: 'membership-benefits', component: MembershipBenefitsComponent },
      { path: 'index-insurance', component: IndexInsuranceComponent },
      { path: 'index-job', component: IndexJobComponent },
      { path: 'index-payments', component: IndexPaymentsComponent },
      { path: 'uberbooty-messenger', component: UberBootyMessengerComponent },
      { path: 'index-studio', component: IndexStudioComponent },
      { path: 'page-aboutus', component: PageAboutusComponent },
      { path: 'page-blog-detail', component: PageBlogDetailComponent },
      { path: 'page-blog-grid', component: PageBlogGridComponent },
      { path: 'page-blog-list', component: PageBlogListComponent },
      { path: 'page-blog-list-sidebar', component: PageBlogListSidebarComponent },
      { path: 'page-blog-sidebar', component: PageBlogSidebarComponent },
      { path: 'page-contact-detail', component: PageContactDetailComponent },
      { path: 'page-contact-two', component: PageContactTwoComponent },
      { path: 'page-history', component: PageHistoryComponent },
      { path: 'page-invoice', component: PageInvoiceComponent },
      { path: 'page-job-apply', component: PageJobApplyComponent },
      { path: 'page-job-candidate', component: PageJobCandidateComponent },
      { path: 'page-job-company', component: PageJobCompanyComponent },
      { path: 'page-job-detail', component: PageJobDetailComponent },
      { path: 'page-jobs', component: PageJobsComponent },
      { path: 'page-job-company-list', component: PageJobCompanyListComponent },
      { path: 'page-job-candidate-list', component: PageJobCandidateListComponent },
      { path: 'page-jobs-sidebar', component: PageJobsSidebarComponent },
      { path: 'page-pricing', component: PagePricingComponent },
      { path: 'page-privacy', component: PagePrivacyComponent },
      { path: 'page-services', component: PageServicesComponent },
      { path: 'page-team', component: PageTeamComponent },
      { path: 'page-terms', component: PageTermsComponent },

      { path: 'page-blog-detail-two', component: PageBlogDetailTwoComponent },
      { path: '#', component: SwitcherComponent },
    ]
  },

  { path: 'auth-login', component: AuthLoginComponent },
  { path: 'auth-cover-login', component: AuthCoverLoginComponent },
  { path: 'auth-cover-re-password', component: AuthCoverRePasswordComponent },
  { path: 'auth-cover-signup', component: AuthCoverSignupComponent },
  { path: 'auth-login-three', component: AuthLoginThreeComponent },
  { path: 'auth-re-password', component: AuthRePasswordComponent },
  { path: 'auth-re-password-three', component: AuthRePasswordThreeComponent },
  { path: 'auth-signup', component: AuthSignupComponent },
  { path: 'auth-signup-three', component: AuthSignupThreeComponent },
  { path: 'index-onepage', component: IndexOnepageComponent },
  { path: 'page-comingsoon', component: PageComingsoonComponent },
  { path: 'page-error', component: PageErrorComponent },
  { path: 'page-thankyou', component: PageThankyouComponent },
  { path: 'page-maintenance', component: PageMaintenanceComponent },

  { path: 'email-alert', component: EmailAlertComponent },
  { path: 'email-confirmation', component: EmailConfirmationComponent },
  { path: 'email-invoice', component: EmailInvoiceComponent },
  { path: 'email-password-reset', component: EmailPasswordResetComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled",
  scrollOffset: [0, 0],
  // Enable scrolling to anchors
  anchorScrolling: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
