import {TThumbMode, TThumbQuality, TThumbRatio} from './types/image';
import {createGetStr} from './utils';

const DEFAULT_MEDIA_SERVER = 'https://dev-img.boundless-commerce.com';

export class BoundlessThumb {
	protected mediaServerUrl: string = DEFAULT_MEDIA_SERVER;
	protected mode: TThumbMode = TThumbMode.scale;
	protected instanceId?: number;
	protected folderPrefix?: string;
	protected quality?: TThumbQuality;
	protected ratio?: TThumbRatio;
	protected pad?: boolean;
	protected grayscale?: boolean;
	protected background?: string;
	protected blur?: number;

	constructor(protected imgLocalPath: string, protected maxSize: number) {
	}

	getSrc(): string {
		if (!this.instanceId) {
			throw new Error('instanceId is not specified. Call setInstanceId(ID) before calling getSrc().');
		}

		const subPath = ['thumb'];
		if (this.folderPrefix) {
			subPath.push(this.folderPrefix);
		}
		subPath.push(`i${this.instanceId}`);
		subPath.push(this.imgLocalPath);

		const params: {
			mode: TThumbMode,
			'max-size': number,
			q?: TThumbQuality,
			ratio?: TThumbRatio,
			pad?: number,
			bg?: string,
			grayscale?: number,
			blur?: number
		} = {
			mode: this.mode,
			'max-size': this.maxSize,
		};

		if (this.quality) {
			params.q = this.quality;
		}

		if (this.ratio) {
			params.ratio = this.ratio;
		}

		if (this.pad) {
			params.pad = 1;
		}

		if (this.background) {
			params.bg = this.background;
		}

		if (this.grayscale) {
			params.grayscale = 1;
		}

		if (this.blur) {
			params.blur = this.blur;
		}

		return `${this.mediaServerUrl}/${subPath.join('/')}?${createGetStr(params)}`;
	}

	setMaxSize(size: number) {
		this.maxSize = size;
		return this;
	}

	setImgLocalPath(localPath: string) {
		this.imgLocalPath = localPath;
		return this;
	}

	setMediaServerUrl(url: string) {
		this.mediaServerUrl = url;
		return this;
	}

	setInstanceId(instanceId: number) {
		this.instanceId = instanceId;
		return this;
	}

	setFolderPrefix(prefix: string) {
		this.folderPrefix = prefix;
		return this;
	}

	setQuality(quality: TThumbQuality) {
		this.quality = quality;
		return this;
	}

	setRatio(ratio: TThumbRatio) {
		this.ratio = ratio;
		return this;
	}

	setPad(pad: boolean) {
		this.pad = pad;
		return this;
	}

	setBlur(value: number) {
		this.blur = value;
		return this;
	}

	setBackground(value: string) {
		this.background = value;
		return this;
	}

	setGrayscale(value: boolean) {
		this.grayscale = value;
		return this;
	}
}