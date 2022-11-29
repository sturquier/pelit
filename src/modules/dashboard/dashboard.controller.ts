import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class DashboardController {
	@Get()
	@Render('dashboard/show-dashboard.pug')
	async showDashboard(): Promise<void> {
		return;
	}
}
