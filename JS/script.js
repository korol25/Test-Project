            'use strict'
            function multitable(){
            document.write("<table>");
                for(var i = 1; i < 11; i++){
                    
                    document.write("<tr>");
                    for(var j = 1; j< 11; j++){
                        if((i == 1 && j>=1 && j<=11) || j == 1)
                        {
                        document.write("<td style = background:#C6322C >"+"\t" + (i*j)+"</td>");
                        }
                        else{
                            document.write("<td>"+"\t" + (i*j)+"</td>");

                        }
                    }
                    document.write("</tr>");
                }
                document.write("</table>");
            }
