## Getting Set Up


### Step 1. Install Python 3.4+

You can download the latest versions [here][python].


### Step 2. Install pip

You can find the universal install script [here][pip].


### Step 3. Install a recent version of Node.js

You can download the latest versions [here][node].

### Step 4. Install Yarn

```bash
npm i -g yarn
```

**Why Yarn and not NPM?**

NPM installs the latest versions. We use [Yarn][yarn] because we want to make sure everyone is using the same libraries.

**What should I do if I get an error?**

Yarn is still new; if you're experiencing any unusual errors with it, please leave a comment on [this issue][yarn-issue].

### Step 5. Clone the repo

```bash
git clone https://github.com/LibreFoodPantry/BEAR-Necessities-Market.git
cd BEAR-Necessities-Market
```

### Step 6. Install & start virtualenv

```bash
pip install virtualenv
virtualenv ENV
source ENV/bin/activate
```

**What if I have trouble activating my environment?**

Consult the official docs [here][virtualenv].


### Step 7. Install dependencies

```bash
pip install -r requirements.txt --no-cache-dir
cd frontend
yarn
```

**What does this do?**

- The pip install, installs all dependencies to run the backend flask server
- The `yarn` command installs all node_modules for the frontend react server

**If ujson fails to install**

ujson contains C++ code that needs to be compiled in the background. If your machine does not have a C++ compiler,
the installation will error out. 
- For Windows: Follow [this link][ujson-win] and download the "Build Tools for Visual Studio 2019" under the
  "Tools for Visual Studio 2019" tab.
- For Mac: Open terminal and run the following command to install the command line tools to compile C++.
  ```bash
  xcode-select --install
  ```

### Step 8. Export environment variables

```bash
export FLASK_APP=manage.py
```

**What does this do?**

This variable sets `flask run` to the application's entry point: manage.py


### Step 9. Run migrations

```bash
flask db upgrade
```

**What does this do?**

Migrations are what programmatically turn your python models into database tables, letting you store/query data


## Development

1. In the frontend directory: ```yarn run build```
2. In a separate terminal, in the root directory: ```flask run```
3. Go to [http://localhost:5000/](http://localhost:5000/)

    
[yarn-issue]: https://github.com/firefox-devtools/debugger/issues/1216
[yarn]: https://yarnpkg.com
[node]: https://nodejs.org/
[python]: https://www.python.org/downloads/
[pip]: https://pip.pypa.io/en/stable/installing/
[virtualenv]: https://virtualenv.pypa.io/en/latest/userguide/
[ujson-win]: https://visualstudio.microsoft.com/downloads/
