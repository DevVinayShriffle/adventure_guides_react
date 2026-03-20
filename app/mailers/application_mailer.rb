class ApplicationMailer < ActionMailer::Base
  default from: Rails.application.credentials.smtp[:email]
  layout "mailer"
end
