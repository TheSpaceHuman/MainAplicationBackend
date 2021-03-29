import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [ProjectsModule, MongooseModule.forRoot(`mongodb+srv://TheSpaceHuman:qaz12345@main.rlapo.mongodb.net/first?retryWrites=true&w=majority`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
