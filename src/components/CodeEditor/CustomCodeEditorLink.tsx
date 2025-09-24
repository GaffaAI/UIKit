import {
	ViewPlugin,
	EditorView,
	Decoration,
	DecorationSet,
	MatchDecorator,
	WidgetType,
	ViewUpdate,
} from "@codemirror/view";
import { Extension } from "@codemirror/state";

const defaultRegexp = /\b((?:https?|ftp):\/\/[^\s/$.?#].[^\s]*)\b/gi;

export interface HyperLinkState {
	url: string;
}

class HyperLinkMark extends WidgetType {
	private readonly state: HyperLinkState;
	constructor(state: HyperLinkState) {
		super();
		this.state = state;
	}
	eq(other: HyperLinkMark) {
		return this.state.url === other.state.url;
	}
	toDOM() {
		const wrapper = document.createElement("a");
		wrapper.href = this.state.url;
		wrapper.target = "_blank";
		wrapper.className = "cm-hyper-link";
		wrapper.rel = "nofollow";
		wrapper.textContent = this.state.url;
		return wrapper;
	}
}

const linkDecorator = (
	regexp?: RegExp,
	matchData?: Record<string, string>,
	matchFn?: (str: string, input: string, from: number, to: number) => string
) =>
	new MatchDecorator({
		regexp: regexp || defaultRegexp,
		decorate: (add, from, to, match) => {
			const url = match[0];
			let urlStr =
				matchFn && typeof matchFn === "function"
					? matchFn(url, match.input, from, to)
					: url;
			if (matchData && matchData[url]) {
				urlStr = matchData[url];
			}
			const linkMark = new HyperLinkMark({ url: urlStr });
			add(from, to, Decoration.replace({ widget: linkMark }));
		},
	});

export type HyperLinkExtensionOptions = {
	regexp?: RegExp;
	match?: Record<string, string>;
	handle?: (value: string, input: string, from: number, to: number) => string;
};

export function hyperLinkExtension({
	regexp,
	match,
	handle,
}: HyperLinkExtensionOptions = {}) {
	return ViewPlugin.fromClass(
		class HyperLinkView {
			decorator: MatchDecorator;
			decorations: DecorationSet;
			constructor(view: EditorView) {
				this.decorator = linkDecorator(regexp, match, handle);
				this.decorations = this.decorator.createDeco(view);
			}
			update(update: ViewUpdate) {
				if (update.docChanged || update.viewportChanged) {
					this.decorations = this.decorator.updateDeco(
						update,
						this.decorations
					);
				}
			}
		},
		{
			decorations: (v) => v.decorations,
		}
	);
}

export const hyperLinkStyle = EditorView.baseTheme({
	".cm-hyper-link": {
		color: "#0000EE",
		textDecoration: "underline",
		cursor: "pointer",
	},
});

export const hyperLink: Extension = [hyperLinkExtension(), hyperLinkStyle];
