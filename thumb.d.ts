import { TThumbMode, TThumbQuality, TThumbRatio } from './types/image';
export declare class BoundlessThumb {
    protected imgLocalPath: string;
    protected maxSize: number;
    protected mediaServerUrl: string;
    protected mode: TThumbMode;
    protected instanceId?: number;
    protected folderPrefix?: string;
    protected quality?: TThumbQuality;
    protected ratio?: TThumbRatio;
    protected pad?: boolean;
    protected grayscale?: boolean;
    protected background?: string;
    protected blur?: number;
    constructor(imgLocalPath: string, maxSize: number);
    getSrc(): string;
    setMaxSize(size: number): this;
    setImgLocalPath(localPath: string): this;
    setMediaServerUrl(url: string): this;
    setInstanceId(instanceId: number): this;
    setFolderPrefix(prefix: string): this;
    setQuality(quality: TThumbQuality): this;
    setRatio(ratio: TThumbRatio): this;
    setPad(pad: boolean): this;
    setBlur(value: number): this;
    setBackground(value: string): this;
    setGrayscale(value: boolean): this;
}
