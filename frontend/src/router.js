
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import VolunteerVolunteerInfoManager from "./components/listers/VolunteerVolunteerInfoCards"
import VolunteerVolunteerInfoDetail from "./components/listers/VolunteerVolunteerInfoDetail"

import MatchingMatchingInfoManager from "./components/listers/MatchingMatchingInfoCards"
import MatchingMatchingInfoDetail from "./components/listers/MatchingMatchingInfoDetail"
import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"

import VolunteeringVolunteeringManager from "./components/listers/VolunteeringVolunteeringCards"
import VolunteeringVolunteeringDetail from "./components/listers/VolunteeringVolunteeringDetail"

import CheckVolunteeringApplicationHistoryView from "./components/CheckVolunteeringApplicationHistoryView"
import CheckVolunteeringApplicationHistoryViewDetail from "./components/CheckVolunteeringApplicationHistoryViewDetail"
import 수혜기관AssociationInfoManager from "./components/listers/수혜기관AssociationInfoCards"
import 수혜기관AssociationInfoDetail from "./components/listers/수혜기관AssociationInfoDetail"

import 봉사활동일정조회View from "./components/봉사활동일정조회View"
import 봉사활동일정조회ViewDetail from "./components/봉사활동일정조회ViewDetail"

import VolunteerhistoryView from "./components/VolunteerhistoryView"
import VolunteerhistoryViewDetail from "./components/VolunteerhistoryViewDetail"

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/volunteers/volunteerInfos',
                name: 'VolunteerVolunteerInfoManager',
                component: VolunteerVolunteerInfoManager
            },
            {
                path: '/volunteers/volunteerInfos/:id',
                name: 'VolunteerVolunteerInfoDetail',
                component: VolunteerVolunteerInfoDetail
            },

            {
                path: '/matchings/matchingInfos',
                name: 'MatchingMatchingInfoManager',
                component: MatchingMatchingInfoManager
            },
            {
                path: '/matchings/matchingInfos/:id',
                name: 'MatchingMatchingInfoDetail',
                component: MatchingMatchingInfoDetail
            },
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },

            {
                path: '/volunteerings/volunteerings',
                name: 'VolunteeringVolunteeringManager',
                component: VolunteeringVolunteeringManager
            },
            {
                path: '/volunteerings/volunteerings/:id',
                name: 'VolunteeringVolunteeringDetail',
                component: VolunteeringVolunteeringDetail
            },

            {
                path: '/volunteerings/checkVolunteeringApplicationHistories',
                name: 'CheckVolunteeringApplicationHistoryView',
                component: CheckVolunteeringApplicationHistoryView
            },
            {
                path: '/volunteerings/checkVolunteeringApplicationHistories/:id',
                name: 'CheckVolunteeringApplicationHistoryViewDetail',
                component: CheckVolunteeringApplicationHistoryViewDetail
            },
            {
                path: '/수혜기관/associationInfos',
                name: '수혜기관AssociationInfoManager',
                component: 수혜기관AssociationInfoManager
            },
            {
                path: '/수혜기관/associationInfos/:id',
                name: '수혜기관AssociationInfoDetail',
                component: 수혜기관AssociationInfoDetail
            },

            {
                path: '/수혜기관/봉사활동일정조회',
                name: '봉사활동일정조회View',
                component: 봉사활동일정조회View
            },
            {
                path: '/수혜기관/봉사활동일정조회/:id',
                name: '봉사활동일정조회ViewDetail',
                component: 봉사활동일정조회ViewDetail
            },

            {
                path: '/mypages/volunteerhistories',
                name: 'VolunteerhistoryView',
                component: VolunteerhistoryView
            },
            {
                path: '/mypages/volunteerhistories/:id',
                name: 'VolunteerhistoryViewDetail',
                component: VolunteerhistoryViewDetail
            },


    ]
})
