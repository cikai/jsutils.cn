<h1>http-server: a command-line http server</h1>

<p><code>http-server</code> is a simple, zero-configuration command-line http server.  It is powerful enough for production usage, but it&#39;s simple and hackable enough to be used for testing, local development, and learning.</p>

<p><img alt="" src="https://github.com/nodeapps/http-server/raw/master/screenshots/public.png"/></p>

<h1>Installing globally:</h1>

<p>Installation via <code>npm</code>:</p>

<pre><code> npm install http-server -g</code></pre>

<p>This will install <code>http-server</code> globally so that it may be run from the command line.</p>

<h2>Usage:</h2>

<pre><code> http-server [path] [options]</code></pre>

<p><code>[path]</code> defaults to <code>./public</code> if the folder exists, and <code>./</code> otherwise.</p>

<h1>Installing as a node app</h1>

<pre><code> mkdir myapp
 cd myapp/
 jitsu install http-server</code></pre>

<p><em>If you do not have <code>jitsu</code> installed you can install it via <code>npm install jitsu -g</code></em></p>

<h2>Usage</h2>

<h3>Starting http-server locally</h3>

<pre><code> node bin/http-server</code></pre>

<p><em>Now you can visit http://localhost:8080 to view your server</em></p>

<h2>Available Options:</h2>

<p><code>-p</code> Port to use (defaults to 8080)</p>

<p><code>-a</code> Address to use (defaults to 0.0.0.0)</p>

<p><code>-d</code> Show directory listings (defaults to &#39;True&#39;)</p>

<p><code>-i</code> Display autoIndex (defaults to &#39;True&#39;)</p>

<p><code>-g</code> or <code>--gzip</code> When enabled (defaults to &#39;False&#39;) it will serve <code>./public/some-file.js.gz</code> in place of <code>./public/some-file.js</code> when a gzipped version of the file exists and the request accepts gzip encoding.</p>

<p><code>-e</code> or <code>--ext</code> Default file extension if none supplied (defaults to &#39;html&#39;)</p>

<p><code>-s</code> or <code>--silent</code> Suppress log messages from output</p>

<p><code>--cors</code> Enable CORS via the <code>Access-Control-Allow-Origin</code> header</p>

<p><code>-o</code> Open browser window after starting the server</p>

<p><code>-c</code> Set cache time (in seconds) for cache-control max-age header, e.g. -c10 for 10 seconds (defaults to &#39;3600&#39;). To disable caching, use -c-1.</p>

<p><code>-U</code> or <code>--utc</code> Use UTC time format in log messages.</p>

<p><code>-P</code> or <code>--proxy</code> Proxies all requests which can&#39;t be resolved locally to the given url. e.g.: -P http://someurl.com</p>

<p><code>-S</code> or <code>--ssl</code> Enable https.</p>

<p><code>-C</code> or <code>--cert</code> Path to ssl cert file (default: cert.pem).</p>

<p><code>-K</code> or <code>--key</code> Path to ssl key file (default: key.pem).</p>

<p><code>-r</code> or <code>--robots</code> Provide a /robots.txt (whose content defaults to &#39;User-agent: *\nDisallow: /&#39;)</p>

<p><code>-h</code> or <code>--help</code> Print this list and exit.</p>