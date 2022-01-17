"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoundlessThumb = void 0;
const image_1 = require("./types/image");
const utils_1 = require("./utils");
const DEFAULT_MEDIA_SERVER = 'https://dev-img.boundless-commerce.com';
class BoundlessThumb {
    constructor(params) {
        this.mediaServerUrl = DEFAULT_MEDIA_SERVER;
        this.mode = image_1.TThumbMode.scale;
        const { imgLocalPath, maxSize, originalWidth, originalHeight } = params;
        this.imgLocalPath = imgLocalPath;
        this.maxSize = maxSize;
        if (originalWidth)
            this.originalWidth = originalWidth;
        if (originalHeight)
            this.originalHeight = originalHeight;
    }
    getSrc() {
        if (!this.instanceId) {
            throw new Error('instanceId is not specified. Call setInstanceId(ID) before calling getSrc().');
        }
        const subPath = ['thumb'];
        if (this.folderPrefix) {
            subPath.push(this.folderPrefix);
        }
        subPath.push(`i${this.instanceId}`);
        subPath.push(this.imgLocalPath);
        const params = {
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
        return `${this.mediaServerUrl}/${subPath.join('/')}?${(0, utils_1.createGetStr)(params)}`;
    }
    getAttrs() {
        const { width, height } = this.calcScaledThumbSize();
        return {
            src: this.getSrc(),
            width,
            height
        };
    }
    setMaxSize(size) {
        this.maxSize = size;
        return this;
    }
    setImgLocalPath(localPath) {
        this.imgLocalPath = localPath;
        return this;
    }
    setMediaServerUrl(url) {
        this.mediaServerUrl = url;
        return this;
    }
    setInstanceId(instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    setFolderPrefix(prefix) {
        this.folderPrefix = prefix;
        return this;
    }
    setQuality(quality) {
        this.quality = quality;
        return this;
    }
    setRatio(ratio) {
        this.ratio = ratio;
        return this;
    }
    setPad(pad) {
        this.pad = pad;
        return this;
    }
    setBlur(value) {
        this.blur = value;
        return this;
    }
    setBackground(value) {
        this.background = value;
        return this;
    }
    setGrayscale(value) {
        this.grayscale = value;
        return this;
    }
    setOriginalSize(width, height) {
        this.originalWidth = width;
        this.originalHeight = height;
        return this;
    }
    calcScaledThumbSize() {
        if (this.ratio) {
            return (0, utils_1.calcThumbSizeByProportion)(this.maxSize, this.ratio);
        }
        else {
            if (!this.originalHeight || !this.originalWidth)
                throw new Error('Image size should be provided');
            let requestedWidth = this.maxSize;
            let requestedHeight = this.maxSize;
            let thumbWidth, thumbHeight;
            if (requestedWidth > this.originalWidth) {
                requestedWidth = this.originalWidth;
            }
            if (requestedHeight > this.originalHeight) {
                requestedHeight = this.originalHeight;
            }
            if (this.originalWidth > this.originalHeight) {
                thumbWidth = requestedWidth;
                thumbHeight = (0, utils_1.calcProportion)(this.originalHeight, requestedWidth, this.originalWidth);
            }
            else {
                thumbWidth = (0, utils_1.calcProportion)(this.originalWidth, requestedHeight, this.originalHeight);
                thumbHeight = requestedHeight;
            }
            return {
                width: thumbWidth,
                height: thumbHeight
            };
        }
    }
}
exports.BoundlessThumb = BoundlessThumb;
