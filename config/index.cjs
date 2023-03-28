/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxf023e90925d4f59c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'dc9fb85f604e5b9665b307c69cff7644',

  PROVINCE: '贵州',
  CITY: '贵阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'og8i55k7XO8VQzUeXqGFcxe78hX4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'EUMK_HLEZKW6sNIAeQMzA2T93qoYyLQ7l4UkGZnwgZ8 ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-05',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小雪宝贝', year: '1997', date: '06-05',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2016', date: '03-29',
        },
        {
          type: '节日', name: '结束异地纪念日', year: '2021', date: '02-26',
        },
      ],
      // 我们在一起已经有xxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2016-03-29' },
        // 结束异地的日子
        { keyword: 'marry_day', date: '2021-02-26' },
      ],
    },
  ],
  
 }

module.exports = USER_CONFIG

