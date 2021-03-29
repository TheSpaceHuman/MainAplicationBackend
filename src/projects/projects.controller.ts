import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { Project } from "./schemas/project.schema";

@Controller('projects')
export class ProjectsController {
    constructor(private readonly service: ProjectsService) {}
    @Get()
    all(): Promise<Project[]> {
        return this.service.all();
    }
    @Get(':id')
    one(@Param('id') id: string): Promise<Project> {
        return this.service.project(id);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() projectDto: CreateProjectDto): Promise<Project> {
        return this.service.create(projectDto);
    }
    @Put(':id')
    update(@Body() projectDto: UpdateProjectDto, @Param('id') id: string): Promise<Project> {
        return this.service.update(id, projectDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string): Promise<Project> {
        return this.service.remove(id);
    }

}
