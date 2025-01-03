function Footer() {
    return (
        <footer className="text-sm text-[#504C41] text-opacity-80 leading-relaxed antialiased max-w-screen px-12 my-4 font-sans">
            © Coded in&nbsp;
            <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="font-boldWithLink"
            >
                Visual Studio Code
            </a>
            &nbsp;by Tech Comm AY24/25. Built with&nbsp;
            <a
                href="https://www.react.dev"
                target="_blank"
                rel="noreferrer noopener"
                className="font-boldWithLink"
            >
                React
            </a>
            , TypeScript,&nbsp;
            <a
                href="https://vite.dev"
                target="_blank"
                rel="noreferrer noopener"
                className="font-boldWithLink"
            >
                Vite
            </a>
            &nbsp;and&nbsp;
            <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="font-boldWithLink"
            >
                TailwindCSS
            </a>. Deployed with&nbsp;
            <a
                href="https://www.netlify.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="font-boldWithLink"
            >
                Netlify
            </a>.
        </footer>
    )
}

export default Footer
