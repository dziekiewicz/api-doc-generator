const router = {
  get: () => {},
  put: () => {},
  post: () => {},
  delete: () => {},
};

/**
 * Get a list of visible projects for authenticated user
 *
 * @section projects
 * @type get
 * @url /projects
 */
router.get('/projects', () => {});

/**
 * Create a project
 *
 * @section projects
 * @type put
 * @url /projects
 * @param {string} name
 * @param {string =} description
 */
router.put('/projects', () => {});

/**
 * Update a project
 *
 * @section projects
 * @type post
 * @url /projects/:id
 * @param {string} name
 * @param {string =} description
 */
router.post('/projects/:id', () => {});

/**
 * Delete a project
 *
 * @section projects
 * @type delete
 * @url /projects/:id
 */
router.delete('/projects/:id', () => {});
