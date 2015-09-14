/**
 * React Starter Kit (http://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2015 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import push from 'git-push';

/**
 * Deploy the contents of the `/build` folder to a remote
 * server via Git. Example: `npm run deploy -- staging`
 */
export default () => new Promise((resolve, reject) => {
  let remote;

  if (process.argv.includes('production')) {
    remote = {
      name: 'production',
      url: 'https://github.com/DVLP/invoice.git',
      branch: 'gh-pages'
    };
  } else if (process.argv.includes('staging')) {
    remote = {
      name: 'staging',
      url: 'https://github.com/DVLP/invoice.git',
      branch: 'gh-pages'
    };
  } else {
    remote = {
      name: 'test',
      url: 'https://github.com/DVLP/invoice.git',
      branch: 'gh-pages'
    };
  }

  push('./build', remote, err => err ? reject(err) : resolve());
});
