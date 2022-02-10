const success = (res, data) => {
  return res.status(200).json({
    success: true,
    data: data,
  });
};

const failed = (res, err) => {
  return res.status(404).json({
    success: false,
    message: err,
  });
};

module.exports = { success, failed };
