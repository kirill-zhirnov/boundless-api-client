import {TThumbMode, TThumbQuality, TThumbRatio} from './types/image';
import {calcProportion, calcThumbSizeByProportion, createGetStr} from './utils';

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
	protected imgLocalPath: string;
	protected maxSize: number;
	protected originalWidth?: number;
	protected originalHeight?: number;

	constructor(params: {imgLocalPath: string, maxSize: number, originalWidth?: number, originalHeight?: number}) {
		const {imgLocalPath, maxSize, originalWidth, originalHeight} = params;

		this.imgLocalPath = imgLocalPath;
		this.maxSize = maxSize;
		if (originalWidth) this.originalWidth = originalWidth;
		if (originalHeight) this.originalHeight = originalHeight;
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

	getAttrs() {
		const {width, height} = this.calcScaledThumbSize();

		return {
			src: this.getSrc(),
			width,
			height
		};
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

	setOriginalSize(width: number, height: number) {
		this.originalWidth = width;
		this.originalHeight = height;

		return this;
	}

	protected calcScaledThumbSize() {
		if (this.ratio) {
			return calcThumbSizeByProportion(this.maxSize, this.ratio);
		} else {
			if (!this.originalHeight || !this.originalWidth) throw new Error('Image size should be provided');

			let requestedWidth = this.maxSize;
			let requestedHeight = this.maxSize;
			let thumbWidth: number, thumbHeight: number;

			if (requestedWidth > this.originalWidth) {
				requestedWidth = this.originalWidth;
			}

			if (requestedHeight > this.originalHeight) {
				requestedHeight = this.originalHeight;
			}

			if (this.originalWidth > this.originalHeight) {
				thumbWidth = requestedWidth;
				thumbHeight = calcProportion(this.originalHeight, requestedWidth, this.originalWidth);
			} else {
				thumbWidth = calcProportion(this.originalWidth, requestedHeight, this.originalHeight);
				thumbHeight = requestedHeight;
			}

			return {
				width: thumbWidth,
				height: thumbHeight
			};
		}
	}
}