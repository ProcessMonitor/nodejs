define({ "api": [
  {
    "type": "post",
    "url": "/user/login",
    "title": "UserLogin",
    "name": "UserLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>Password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>{err : 0 , msg : '欢迎您,尊敬的用户'}.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "express/router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/doRegist",
    "title": "UserRegister",
    "name": "UserRegist",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Emailcode.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>{err : 0 , msg : 'reg ok'}.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "express/router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/sendMailCode",
    "title": "Request EmailCode",
    "name": "getEmailCode",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>UserEmail.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>{err : 0 , msg : '邮件发送成功'}.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "express/router/userRouter.js",
    "groupTitle": "User"
  }
] });
