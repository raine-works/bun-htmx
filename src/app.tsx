import { env } from './utils/env';
import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import Root from './root';
import Home, { home } from './pages/home';

const app = new Elysia().use(html());

app.get('/', () => (
    <Root>
        <Home />
    </Root>
));

app.use(home);

app.listen(env.PORT, () => {
    console.log(
        `App listening at http://${app.server?.hostname}:${app.server?.port}`
    );
});
