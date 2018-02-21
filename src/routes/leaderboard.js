const Member = require('../models/member');

module.exports = router => {
	router.get('/leaderboard', async (req, res) => {
		const query = req.query || {};

		let members = await Member.find({
			tag: new RegExp(query.tag || '.*'),
			'cookies.date': {
				$gt: new Date(Number(query.after) || 0),
				$lt: new Date(Number(query.before) || Date.now())
			}
		});

		members = members
			.map(member => {
				member = member.toObject();
				member.cookies = member.cookies.length;
				return member;
			})
			.sort((a, b) => b.cookies - a.cookies)
			.slice(0, query.limit || 10);

		res.json(members);
	});
};
