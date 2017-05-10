const router = {
  get: function (url, callback) {},
  put: function (url, callback) {},
  post: function (url, callback) {},
  delete: function (url, callback) {},
};

/**
 * Get a list of visible projects for authenticated user
 *
 * @section projects
 * @type get
 * @url /projects
 */
router.get('/projects', function () {});

/**
 * Create a project
 *
 * @section projects
 * @type put
 * @url /projects
 * @param {string} name
 * @param {string =} description
 */
router.put('/projects', function () {});

/**
 * Update a project
 *
 * @section projects
 * @type post
 * @url /projects/:id
 * @param {string} name
 * @param {string =} description
 */
router.post('/projects/:id', function () {});

/**
 * Delete a project
 *
 * @section projects
 * @type delete
 * @url /projects/:id
 */
router.delete('/projects/:id', function () {});
