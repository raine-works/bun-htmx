import { type PropsWithChildren } from '@kitajs/html'

export default ({ children }: PropsWithChildren) => {
	return (
		<>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Bun</title>
				<script src="https://unpkg.com/htmx.org@1.9.3"></script>
				<script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
				<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
				<script src="https://unpkg.com/htmx.org/dist/ext/preload.js"></script>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.min.css"></link>
				<script>htmx.config.globalViewTransitions = true;</script>
			</head>
			{children}
		</>
	)
}
