export class CreateProjectDto {
    readonly title: string;
    readonly description: string;
    readonly promo: string;
    readonly tags: string[];
    readonly images: string[];
}
