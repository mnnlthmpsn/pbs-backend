module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3ce125d71c7d21b463c1cba39655c913'),
  },
});
