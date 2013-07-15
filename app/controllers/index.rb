get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  
  input = params[:user_input]

    if input == input.upcase
      @grandma = "NO, NOT SINCE 1983" 
    else
      @grandma = "HUH?! SPEAK UP SONNY!"
    end
  
  erb :index

  # save response
  # check what kind of response eg. upcase, downcase
  # return some kind of view

  #"Implement the /grandma route yourself.<br>Params: <code>#{params.inspect}</code>"
end

