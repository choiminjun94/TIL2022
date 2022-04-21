# _*_ coding: utf-8 _*_

import json

master = {}
master['uipath'] = {'rank':1, 'lastest ': '2022.3.31', 'message': '정상'}


def greeting( key):
    if key in master:
        return json.dumps(master[key])
    else:
        return json.dumps({"message": "해당 값이 없습니다."})
