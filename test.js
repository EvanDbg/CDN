console.log('ok test');

const $ = new Env();
const options = {
  'url': 'https://api.day.app/oscvrdJCinKuuuf2dSUXhL/okok',
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
$.get(options, (err, resp, data) => {
  try {
    if (err) {
      console.log('Bark APP发送通知调用API失败！！\n')
      console.log(err);
    } else {
      data = JSON.parse(data);
      if (data.code === 200) {
        console.log('Bark APP发送通知消息成功\n')
      } else {
        console.log(`${data.message}\n`);
      }
    }
  } catch (e) {
    $.logErr(e, resp);
  } finally {

  }
})
