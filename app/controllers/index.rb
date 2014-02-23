get '/' do
  # Look in app/views/index.erb
  @contacts = Contact.all
  erb :index
end

get '/contact' do
	contact = Contact.find(params[:id])
	if request.xhr?
		content_type :json
		{id: "#{contact.id}", name: "#{contact.name}", address: "#{contact.address}",
		city_state: "#{contact.city_state}", phone_number: "#{contact.phone_number}",
		email: "#{contact.email}"}.to_json
	end
end

post '/address' do
	contact = Contact.find_or_create_by_id(params[:id])
	contact.update_attributes(params)
	if contact.save
		redirect '/'
	end
end


post '/delete' do
	if request.xhr?
		contact = Contact.find(params[:id])
		contact.delete
		redirect '/'
	end
end