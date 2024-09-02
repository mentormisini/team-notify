import { Controller, Post, Body, Headers, HttpStatus, HttpException } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {
  @Post('github')
  handleGitHubWebhook(@Body() body: any, @Headers('x-github-event') event: string) {
    if (event === 'push') {
      // Extract commit information
      const commits = body.commits;
      // Notify team about new commits
      this.notifyTeam(commits);
    }
    return HttpStatus.OK;
  }

  private notifyTeam(commits: any[]) {
    // Implement notification logic here
    console.log('New commits:', commits);
    // You can use email, SMS, or any other notification service
  }
}
