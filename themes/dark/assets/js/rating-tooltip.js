const attachImdbTooltip=function(){$(".imdbstars").qtip({content:{text(){return $(this).attr("qtip-content")}},show:{solo:!0},position:{my:"right center",at:"center left",adjust:{y:0,x:-6}},style:{tip:{corner:!0,method:"polygon"},classes:"qtip-rounded qtip-shadow ui-tooltip-sb"}})};