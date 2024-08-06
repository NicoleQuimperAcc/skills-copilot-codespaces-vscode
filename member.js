function skillsMember(){
    return{
        restrict: 'E',
        templateURL: 'modules/skills/views/member.html',
        controller:'SkillsMemberController',
        ControllerAS: 'vm',
        bindToController: true,
        scope:{
            member: 'm'
        }
    };
}