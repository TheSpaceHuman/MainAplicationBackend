import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Project, ProjectDocument } from "./schemas/project.schema";
import { Model } from "mongoose";

@Injectable()
export class ProjectsService {
    constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) {}

    async all(): Promise<Project[]> {
        return this.projectModel.find().exec();
    }
    async project(id): Promise<Project> {
        return this.projectModel.findById(id);
    }
    async create(projectDto: CreateProjectDto):  Promise<Project> {
        const newProject = new this.projectModel(projectDto);
        return newProject.save();
    }
    async update(id: string, projectDto: UpdateProjectDto): Promise<Project> {
        return this.projectModel.findByIdAndUpdate(id, projectDto, { new: true })
    }
    async remove(id: string): Promise<Project> {
        return this.projectModel.findByIdAndRemove(id)
    }
}
