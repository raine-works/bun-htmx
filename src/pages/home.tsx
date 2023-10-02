import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';

export default () => {
    return (
        <>
            <div class="h-screen flex justify-center items-center">
                <div class="p-10 rounded-lg bg-gray-300">
                    <button
                        class="py-2 px-6 bg-blue-800 text-white rounded-lg"
                        hx-get="/hello"
                        hx-target="#target"
                        hx-swap="innerHtml"
                    >
                        Click Me
                    </button>
                    <div class="text-center mt-4" id="target">
                        <h1>This is my target</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export const home = new Elysia().use(html());

home.get('/hello', () => <h1>Hello World!</h1>);
