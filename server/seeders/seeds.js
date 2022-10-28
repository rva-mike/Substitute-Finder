// const faker = require('faker');
const userSeeds = require('./userSeed.json');
const jobSeeds = require('./jobSeed.json');
const db = require('../config/connection');
const { Job, User } = require('../models');

db.once('open', async () => {
  try {
    await Job.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < jobSeeds.length; i++) {
      const { _id, jobAuthor } = await Job.create(jobSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: jobAuthor },
        {
          $addToSet: {
            jobs: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});