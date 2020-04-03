
export default function show_toast(title: string, icon: 'success' | 'loading' | 'none', duration?: number, image?: string, mask?: boolean) {
	const options = {};

	if (duration) {
		Object.assign(options, {
			duration
		});
	}
	if (image !== undefined) {
		Object.assign(options, {
			image
		});
	}
	if (mask !== undefined) {
		Object.assign(options, {
			mask
		});
	}
	return new Promise<boolean>((resolve) => {
		wx.showToast({
			// duration,
			// image,
			icon,
			// mask,				// 是否显示透明蒙层，防止触摸穿透，默认：false
			title,
			success() {
				resolve(true);
			},
			fail() {
				resolve(false);
			},
			...options
		});
	});
}
